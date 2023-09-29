import { Meteor } from "meteor/meteor";
import { LinksCollection } from "/imports/api/links";

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.startup(async () => {
  console.log("Using process env", process.env["galaxy.meteor.com"]); //
  console.log("Using process env", process.env.SOMEVAR); //
  console.log(
    "Using Meteor settings galaxy",
    Meteor.settings["galaxy.meteor.com"]
  );
  console.log("Using Meteor settings", Meteor.settings);
});

Meteor.startup(function () {
  if (Meteor.settings)
    for (let variableName in Meteor.settings)
      process.env[variableName] = Meteor.settings[variableName];
});
