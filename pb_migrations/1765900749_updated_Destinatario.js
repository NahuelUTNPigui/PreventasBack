/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hohl6xycaxl2fje")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zalglpqn",
    "name": "ubicacion",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hohl6xycaxl2fje")

  // remove
  collection.schema.removeField("zalglpqn")

  return dao.saveCollection(collection)
})
