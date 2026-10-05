/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nulja87z20e5z8c")

  // remove
  collection.schema.removeField("ocuy5s6z")

  // remove
  collection.schema.removeField("fb6klvnp")

  // remove
  collection.schema.removeField("fdmwc6jo")

  // remove
  collection.schema.removeField("iiynwkis")

  // remove
  collection.schema.removeField("ttgivqbv")

  // remove
  collection.schema.removeField("lt0ks6is")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6zkvazmr",
    "name": "totalacuentas",
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
    "id": "2e8dh1v7",
    "name": "acuenta",
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
    "id": "2fqeil6g",
    "name": "pagocompleto",
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
    "id": "mwjmr7wl",
    "name": "completo",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nulja87z20e5z8c")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ocuy5s6z",
    "name": "totaladicionales",
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
    "id": "fb6klvnp",
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
    "id": "fdmwc6jo",
    "name": "fechaliquidacion",
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
    "id": "iiynwkis",
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
    "id": "ttgivqbv",
    "name": "fecharevision",
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
    "id": "lt0ks6is",
    "name": "pagado",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("6zkvazmr")

  // remove
  collection.schema.removeField("2e8dh1v7")

  // remove
  collection.schema.removeField("2fqeil6g")

  // remove
  collection.schema.removeField("mwjmr7wl")

  return dao.saveCollection(collection)
})
