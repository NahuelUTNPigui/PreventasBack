/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1r2tkc39jdy2y57")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "celjbkqv",
    "name": "remitente",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "99kqu0vxib506et",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sp1doiyi",
    "name": "destinatario",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "hohl6xycaxl2fje",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pdrvxuuh",
    "name": "localidad",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "2hk2qfpfwi9mhm0",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lnhcbpno",
    "name": "proveedor",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ktuzvvkcsbsch5x",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eogxk8xo",
    "name": "chofer",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "04wfb4ofl0e6jn7",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cg82ws03",
    "name": "vehiculo",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "whppq2fqfk11qm6",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q0mhftjv",
    "name": "fechaEntrega",
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
    "id": "rmlxdlkz",
    "name": "confirmado",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7ijehdux",
    "name": "reubicado",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wttsl8zy",
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
    "id": "qzbrqkmr",
    "name": "novedad",
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
    "id": "80wc7cau",
    "name": "valorDeclarado",
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
    "id": "wcavtdo2",
    "name": "precioUnitarioKilo",
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
    "id": "7vqtgl61",
    "name": "precioUnitarioBulto",
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
    "id": "3ux762sg",
    "name": "porcentajeCobro",
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
    "id": "bppigjbq",
    "name": "totalViaje",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1r2tkc39jdy2y57")

  // remove
  collection.schema.removeField("celjbkqv")

  // remove
  collection.schema.removeField("sp1doiyi")

  // remove
  collection.schema.removeField("pdrvxuuh")

  // remove
  collection.schema.removeField("lnhcbpno")

  // remove
  collection.schema.removeField("eogxk8xo")

  // remove
  collection.schema.removeField("cg82ws03")

  // remove
  collection.schema.removeField("q0mhftjv")

  // remove
  collection.schema.removeField("rmlxdlkz")

  // remove
  collection.schema.removeField("7ijehdux")

  // remove
  collection.schema.removeField("wttsl8zy")

  // remove
  collection.schema.removeField("qzbrqkmr")

  // remove
  collection.schema.removeField("80wc7cau")

  // remove
  collection.schema.removeField("wcavtdo2")

  // remove
  collection.schema.removeField("7vqtgl61")

  // remove
  collection.schema.removeField("3ux762sg")

  // remove
  collection.schema.removeField("bppigjbq")

  return dao.saveCollection(collection)
})
