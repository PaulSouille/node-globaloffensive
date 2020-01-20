// Auto-generated by generate-protos script on Sat Jan 18 2020 10:03:20 GMT+0100 (GMT+01:00)

const Schema = module.exports;

mergeObjects(Schema, require('./base_gcmessages.js'));
mergeObjects(Schema, require('./cstrike15_gcmessages.js'));
mergeObjects(Schema, require('./econ_gcmessages.js'));
mergeObjects(Schema, require('./engine_gcmessages.js'));
mergeObjects(Schema, require('./gcsdk_gcmessages.js'));
mergeObjects(Schema, require('./gcsystemmsgs.js'));
mergeObjects(Schema, require('./htmlmessages.js'));
mergeObjects(Schema, require('./netmessages.js'));
mergeObjects(Schema, require('./steammessages.js'));

function mergeObjects(destinationObject, sourceObject) {
	for (let i in sourceObject) {
		if (sourceObject.hasOwnProperty(i)) {
			destinationObject[i] = sourceObject[i];
		}
	}
}
