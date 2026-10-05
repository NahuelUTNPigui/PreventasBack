/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0bmlsncy2tgsivp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q8vfkkjq",
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
  const collection = dao.findCollectionByNameOrId("0bmlsncy2tgsivp")

  // remove
  collection.schema.removeField("q8vfkkjq")

  return dao.saveCollection(collection)
})
