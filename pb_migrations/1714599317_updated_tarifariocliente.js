/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("je6rsimlsaelle7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "amu0wtum",
    "name": "precio",
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
    "id": "duwhpbbk",
    "name": "fechadesde",
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
    "id": "ddzaedxz",
    "name": "fechahasta",
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
    "id": "fdxi4snx",
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
  const collection = dao.findCollectionByNameOrId("je6rsimlsaelle7")

  // remove
  collection.schema.removeField("amu0wtum")

  // remove
  collection.schema.removeField("duwhpbbk")

  // remove
  collection.schema.removeField("ddzaedxz")

  // remove
  collection.schema.removeField("fdxi4snx")

  return dao.saveCollection(collection)
})
