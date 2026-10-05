/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ghfoqghrzyup5k3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "glfkwvyo",
    "name": "enrevision",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mm9wdi8m",
    "name": "enliquidacion",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0juallvf",
    "name": "liquidacion",
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
    "id": "uisgv8rc",
    "name": "revision",
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
  const collection = dao.findCollectionByNameOrId("ghfoqghrzyup5k3")

  // remove
  collection.schema.removeField("glfkwvyo")

  // remove
  collection.schema.removeField("mm9wdi8m")

  // remove
  collection.schema.removeField("0juallvf")

  // remove
  collection.schema.removeField("uisgv8rc")

  return dao.saveCollection(collection)
})
