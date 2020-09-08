import { Entity } from '../main'
import { IEvent, createEvent } from './main'
import { Filter } from '../filters/main'

export class SubEventSequence implements IEvent {
	protected sequence: [Filter | null, IEvent][] = []

	constructor(protected entity: Entity, rawSequence: unknown[]) {
		for (const entry of rawSequence) {
			const event = createEvent(entity, entry as Record<string, unknown>)
			if (!event) continue

			const potentialFilters = (entry as any).filters
			if (potentialFilters !== undefined)
				this.sequence.push([
					new Filter(entity, potentialFilters),
					event,
				])
			else this.sequence.push([null, event])
		}
	}

	trigger() {
		this.sequence.forEach(([filter, event]) => {
			if (!filter || filter.eval()) event.trigger()
		})
	}
}