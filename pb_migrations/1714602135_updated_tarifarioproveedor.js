/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kvv5u99mndmzp6l")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u6blq9ek",
    "name": "descripcion",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kvv5u99mndmzp6l")

  // remove
  collection.schema.removeField("u6blq9ek")

  return dao.saveCollection(collection)
})
