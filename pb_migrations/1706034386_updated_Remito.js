/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1r2tkc39jdy2y57")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mk1rcorp",
    "name": "historial",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1gnl04tjvfgi8m2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "utiuhajr",
    "name": "formaPago",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "h4y88n2uxlylrqn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1r2tkc39jdy2y57")

  // remove
  collection.schema.removeField("mk1rcorp")

  // remove
  collection.schema.removeField("utiuhajr")

  return dao.saveCollection(collection)
})
