/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n93vmko9xuzanug")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jdmwm75s",
    "name": "operador",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n93vmko9xuzanug")

  // remove
  collection.schema.removeField("jdmwm75s")

  return dao.saveCollection(collection)
})
