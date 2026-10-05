/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ghfoqghrzyup5k3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dgm7jcqe",
    "name": "escerrada",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yvvxsitj",
    "name": "fechacierre",
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
  collection.schema.removeField("dgm7jcqe")

  // update
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

  return dao.saveCollection(collection)
})
