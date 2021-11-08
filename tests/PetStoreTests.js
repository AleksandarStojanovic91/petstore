const test = require('chai').expect;
const api = require('../support/helpers.js');
const env = require('../config/env.js')[process.env.ENV];
const apiData = require('../test_data/apiData');
const testData = require('../test_data/testData');

describe('Pet Store Tests - Positive',()=>{
    let ID = 0;
    it('Should Create a Pet - Post call - @TC001', async () => {
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
    //Checking created Pet match with the Get Pet
    it('Should Get a Pets Details - Get call - @TC002', async () => {
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
    it('Should Edit a Pet - Put call - @TC003', async () => {
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
    it('Should Delete a Pet - Delete call - @TC004', async () => {
        const res = await api.deleteRequest(env.url,apiData.apis.getPets.replace("$",ID),apiData.commonHeaders);

        test(await res.statusCode).to.equal(200);
        test(await res.body.type).to.equal("unknown");
        test(await res.body.message).to.equal(ID.toString());
    });
});

describe('Pet Store Tests - Negative',()=>{
    //Loops through test data object and for each object runs a test updating test data and expected data
    Object.entries(testData.GetPetsTests).forEach(([variant, data]) => {
        it('Should not Get a Pets Details with '+variant+' '+data.testID, async () => {
            const res = await api.getRequest(env.url,apiData.apis.getPets.replace("$",data.petID),apiData.commonHeaders);

            test(await res.statusCode).to.equal(data.expectedResponseCode);
            //Should verify different status codes based on whats expected in test data
            test(await res.body.code).to.equal(data.expectedCode);
            test(await res.body.type).to.equal(data.expectedType);
            if(data.expectedMessage !== "NONE"){
                test(await res.body.message).to.equal(data.expectedMessage);
            }
        });
    });
    Object.entries(testData.DeletePetsTests).forEach(([variant, data]) => {
        it('Should not Delete a Pet Details with '+variant+' '+data.testID, async () => {

            const res = await api.deleteRequest(env.url,apiData.apis.getPets.replace("$",data.petID),apiData.commonHeaders);

            test(await res.statusCode).to.equal(data.expectedResponseCode);
            if(data.expectedType !== "NONE") {
                test(await res.body.type).to.equal(data.expectedType);
            }
            if(data.expectedMessage !== "NONE") {
                test(await res.body.message).to.equal(data.expectedMessage);
            }
        });
    });
    Object.entries(testData.PostPetsTests).forEach(([variant, data]) => {
        it('Should not Create a Pet Details with '+variant+' '+data.testID, async () => {
            apiData.postPetBody.id = data.petID;
            apiData.postPetBody.category.id = data.categoryID;
            apiData.postPetBody.category.name = data.categoryName;
            apiData.postPetBody.name = data.name;
            apiData.postPetBody.photoUrls[0] = data.photoUrl;
            apiData.postPetBody.tags.id = data.tagsID;
            apiData.postPetBody.tags.name = data.tagsName;
            apiData.postPetBody.status = data.status;

            const res = await api.postRequest(env.url,apiData.apis.postPets,apiData.postPetBody,apiData.commonHeaders);

            test(await res.statusCode).to.equal(data.expectedResponseCode);
            test(await res.body.type).to.equal(data.expectedType);
            test(await res.body.message).to.equal(data.expectedMessage);
            test(await res.body.code).to.equal(data.expectedCode);

        });
    });
    Object.entries(testData.PutPetsTests).forEach(([variant, data]) => {
        it('Should not Update a Pet Details with '+variant+' '+data.testID, async () => {
            apiData.putPetBody.id = data.petID;
            apiData.putPetBody.category.id = data.categoryID;
            apiData.putPetBody.category.name = data.categoryName;
            apiData.putPetBody.name = data.name;
            apiData.putPetBody.photoUrls[0] = data.photoUrl;
            apiData.putPetBody.tags.id = data.tagsID;
            apiData.putPetBody.tags.name = data.tagsName;
            apiData.putPetBody.status = data.status;

            const res = await api.putRequest(env.url,apiData.apis.postPets,apiData.putPetBody,apiData.commonHeaders);

            test(await res.statusCode).to.equal(data.expectedResponseCode);
            test(await res.body.type).to.equal(data.expectedType);
            test(await res.body.message).to.equal(data.expectedMessage);
            test(await res.body.code).to.equal(data.expectedCode);
        });
    });
});