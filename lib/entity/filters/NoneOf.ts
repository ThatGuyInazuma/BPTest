import { Entity } from '../main'
import { createFilter } from './main'
import type { Evaluable } from './_generic'

export class NoneOf implements Evaluable {
	protected filters: Evaluable[]
	constructor(entity: Entity, rawFilters: unknown[]) {
		this.filters = rawFilters.map((rawFilter) =>
			createFilter(entity, rawFilter)
		)
	}

	eval() {
		for (const filter of this.filters) {
			if (filter.eval()) return false
		}
		return true
	}
}
