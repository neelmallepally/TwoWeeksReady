import Vue from 'vue';
import Vuex from 'vuex';
import emergencyKitStore from './modules/prepare/emergency-kits/emergency-kit-store';
import hazardHuntStore from './modules/prepare/hazards/hazard-hunt-store';
import hazardInfoStore from './modules/prepare/hazards/hazard-info-store';
import globalStore from './modules/global/global-store';
import familyPlansStore from './modules/prepare/family-plans';

Vue.use(Vuex);

const store = new Vuex.Store({
    // state: {

    // },
    // mutations: {

    // },
    // actions: {

    // },
    modules: {
        globalStore,
        emergencyKitStore,
        hazardHuntStore,
        hazardInfoStore,
        familyPlansStore
    }
});

export default store;

