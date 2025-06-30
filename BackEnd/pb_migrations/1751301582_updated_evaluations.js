/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3414379113")

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3482339971",
    "hidden": false,
    "id": "relation3674561267",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "submission",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3414379113")

  // remove field
  collection.fields.removeById("relation3674561267")

  return app.save(collection)
})
