const test = require('chai').expect;
const api = require('../support/helpers.js');
const env = require('../config/env.js')[process.env.ENV];
const apiData = require('../test_data/apiData');
const testData = require('../test_data/testData');

describe('Pet Store Tests - Positive',()=>{
    let ID = 0;
    it('Should Create a Pet - Post call', async () => {
        ID = api.randomNumber(1,99999);
        apiData.postPetBody.id = ID;

        const res = await api.postRequest(env.url,apiData.apis.postPets,apiData.postPetBody,apiData.commonHeaders);

        test(await res.statusCode).to.equal(200);
        test(await res.body.id).to.equal(ID);
        test(await res.body.category.id).to.equal(apiData.postPetBody.category.id);
        test(await res.body.category.name).to.equal(apiData.postPetBody.category.name);
        test(await res.body.name).to.equal(apiData.postPetBody.name);
        test(await res.body.photoUrls[0]).to.equal(apiData.postPetBody.photoUrls[0]);
        test(await res.body.tags[0].id).to.equal(apiData.postPetBody.tags[0].id);
        test(await res.body.tags[0].name).to.equal(apiData.postPetBody.tags[0].name);
        test(await res.body.status).to.equal(apiData.postPetBody.status);

    });
    it('Should Get a Pets Details - Get call', async () => {
        api.timeout(5000)
        const res = await api.getRequest(env.url,apiData.apis.getPets.replace("$",ID),apiData.commonHeaders);

        test(await res.statusCode).to.equal(200);
        test(await res.body.id).to.equal(ID);
        test(await res.body.category.id).to.equal(apiData.postPetBody.category.id);
        test(await res.body.category.name).to.equal(apiData.postPetBody.category.name);
        test(await res.body.name).to.equal(apiData.postPetBody.name);
        test(await res.body.photoUrls[0]).to.equal(apiData.postPetBody.photoUrls[0]);
        test(await res.body.tags[0].id).to.equal(apiData.postPetBody.tags[0].id);
        test(await res.body.tags[0].name).to.equal(apiData.postPetBody.tags[0].name);
        test(await res.body.status).to.equal(apiData.postPetBody.status);

    });
    it('Should Edit a Pet - Put call', async () => {
        apiData.putPetBody.id = ID;
        apiData.putPetBody.name = "TestPetNameEdit";

        const res = await api.putRequest(env.url,apiData.apis.postPets,apiData.putPetBody,apiData.commonHeaders);

        test(await res.statusCode).to.equal(200);
        test(await res.body.id).to.equal(ID);
        test(await res.body.category.id).to.equal(apiData.putPetBody.category.id);
        test(await res.body.category.name).to.equal(apiData.putPetBody.category.name);
        test(await res.body.name).to.equal(apiData.putPetBody.name);
        test(await res.body.photoUrls[0]).to.equal(apiData.putPetBody.photoUrls[0]);
        test(await res.body.tags[0].id).to.equal(apiData.putPetBody.tags[0].id);
        test(await res.body.tags[0].name).to.equal(apiData.putPetBody.tags[0].name);
        test(await res.body.status).to.equal(apiData.putPetBody.status);

    });
    it('Should Delete a Pet - Delete call', async () => {
        const res = await api.deleteRequest(env.url,apiData.apis.getPets.replace("$",ID),apiData.commonHeaders);

        test(await res.statusCode).to.equal(200);
        test(await res.body.type).to.equal("unknown");
        test(await res.body.message).to.equal(ID.toString());
    });
});