/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rnrk4u7ti9qispq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z2eavuju",
    "name": "cobro",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "3zuv79mpmo12qd4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rnrk4u7ti9qispq")

  // remove
  collection.schema.removeField("z2eavuju")

  return dao.saveCollection(collection)
})
