const test = require('chai').expect;
const api = require('../support/helpers.js');
const env = require('../config/env.js')[process.env.ENV];
const apiData = require('../test_data/apiData');
const testData = require('../test_data/testData');

describe('Pet Store Tests - Positive',()=>{
    it('Should Create a Pet - Post call', async () => {
        apiData.postPetBody.id =

        const res = api.postRequest(env.url,apiData.apis.postPets,apiData.postPetBody,apiData.commonHeaders,200);
    });
});




xdescribe('Offer Orchestrator API - Offer Group',()=>{
    Object.entries(testData.getOfferGroupsTestData).forEach(([variant, data]) => {
        it('should get an employee with '+variant+' '+data.testID, async () => {
            const res = await api.getRequest(env.url,apiData.apis.offerGroups+"?limit="+data.limit+"&offset="+apiData.getOfferGroupsParams.offset+"&inquiryHash="+apiData.getOfferGroupsParams.inquiryHash,apiData.commonHeaders);

            if(await res.statusCode === 200) {
                test(await res.statusCode).to.equal(data.expectedResponseCode);
                test(await res.body.count).to.equal(data.expectedLimit);
                test(await res.body.total).to.be.a('number')
                for (let i = 0; i < await res.body._embedded.offerGroups.length; i++) {
                    test(await res.body._embedded.offerGroups[i].id).to.be.a('string')
                    test(await res.body._embedded.offerGroups[i].inquiryHash).to.be.a('string')
                    test(await res.body._embedded.offerGroups[i].createdAt).to.be.a('string')
                }
                test(await res.body._embedded.offerGroups.length).to.equal(data.expectedLimit)
            } else {
                test(await res.statusCode).to.equal(data.expectedResponseCode);
                test(await res.body.statusCode).to.equal(data.expectedResponseCode);
                test(await res.body.message[0]).to.equal(data.expectedMessage);
                test(await res.body.error).to.equal(data.expectedError);
            }
        });
    });
});