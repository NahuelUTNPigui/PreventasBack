/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8q0p7k8u7xn1131")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m8f0rgxs",
    "name": "tipocobro",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lbz3lwm8",
    "name": "cheque",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "zkvhtu1gaujmjav",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "axzdbomm",
    "name": "transferencia",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "2eof30gylfjbcvj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zh3rw0pf",
    "name": "flujo",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yl4zgy1z4cdfvl7",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8q0p7k8u7xn1131")

  // remove
  collection.schema.removeField("m8f0rgxs")

  // remove
  collection.schema.removeField("lbz3lwm8")

  // remove
  collection.schema.removeField("axzdbomm")

  // remove
  collection.schema.removeField("zh3rw0pf")

  return dao.saveCollection(collection)
})
