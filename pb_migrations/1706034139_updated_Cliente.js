/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n93vmko9xuzanug")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2be5nvve",
    "name": "cuit",
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
    "id": "n69hupig",
    "name": "razonSocial",
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
    "id": "lgtu9ybn",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n93vmko9xuzanug")

  // remove
  collection.schema.removeField("2be5nvve")

  // remove
  collection.schema.removeField("n69hupig")

  // remove
  collection.schema.removeField("lgtu9ybn")

  return dao.saveCollection(collection)
})
