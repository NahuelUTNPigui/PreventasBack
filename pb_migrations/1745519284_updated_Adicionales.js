/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c9jvy3975zpjxut")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "58pj82wd",
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
    "id": "pmeyq7cp",
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
    "id": "jvfezpko",
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
  const collection = dao.findCollectionByNameOrId("c9jvy3975zpjxut")

  // remove
  collection.schema.removeField("58pj82wd")

  // remove
  collection.schema.removeField("pmeyq7cp")

  // remove
  collection.schema.removeField("jvfezpko")

  return dao.saveCollection(collection)
})
