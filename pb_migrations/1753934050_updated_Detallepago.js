/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yu4dzpfn233s50o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eugcwwzr",
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
  const collection = dao.findCollectionByNameOrId("yu4dzpfn233s50o")

  // remove
  collection.schema.removeField("eugcwwzr")

  return dao.saveCollection(collection)
})
