/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ghfoqghrzyup5k3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zep2womn",
    "name": "notarevision",
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
    "id": "yvvxsitj",
    "name": "cerrada",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "apglytjb",
    "name": "notacierre",
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
  const collection = dao.findCollectionByNameOrId("ghfoqghrzyup5k3")

  // remove
  collection.schema.removeField("zep2womn")

  // remove
  collection.schema.removeField("yvvxsitj")

  // remove
  collection.schema.removeField("apglytjb")

  return dao.saveCollection(collection)
})
