/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_250649598")

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3414379113",
    "hidden": false,
    "id": "relation321103221",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "evaluation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_250649598")

  // remove field
  collection.fields.removeById("relation321103221")

  return app.save(collection)
})
