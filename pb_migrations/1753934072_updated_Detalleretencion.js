/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgi6dfrvf1chksf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sd65jmqo",
    "name": "fecha",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xgi6dfrvf1chksf")

  // remove
  collection.schema.removeField("sd65jmqo")

  return dao.saveCollection(collection)
})
