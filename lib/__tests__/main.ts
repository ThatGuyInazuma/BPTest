// import { ENV } from '../main'
// import { Log } from '../Log/main'
// import { join } from 'path'

// const PROJ = '.\\lib\\__tests__\\Test BP'

// test('player.json', (done) => {
// ENV.setup(PROJ, async ({ World, readJSON, Entity }) => {
//     const world = new World();
//     const player = new Entity(await readJSON(join(PROJ, "entities/player.json")), {
//         query: {
//             get_equipped_item_name() {
//                 return "honey_bottle";
//             },
//             get_position() {
//                 return 0;
//             }
//         }
//     });
//     world.add(player);
//     world.tick(22);
//     player.trigger("minecraft:gain_bad_omen");
//     world.tick(1);
//     console.log(player.getComponents());
//     world.tick(19);
//     console.log(player.getComponents());
//     expect(player.animation_controllers.get("bridge_custom_item_behavior")).toBeDefined();
//     console.log(ENV.LOG.getLogs())
//     expect(ENV.LOG.getLogs().includes(`Triggered event "bridge:on_equipped_e41753f3_74c0_4974_a621_bb841c3f84f1"`)).toBe(true);
//     done();
// });
// })
