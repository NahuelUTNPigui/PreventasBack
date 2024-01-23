/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("whppq2fqfk11qm6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ctozzgnh",
    "name": "observacion",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "daibueuc",
    "name": "active",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("whppq2fqfk11qm6")

  // remove
  collection.schema.removeField("ctozzgnh")

  // remove
  collection.schema.removeField("daibueuc")

  return dao.saveCollection(collection)
})
