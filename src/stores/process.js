import { defineStore } from "pinia";

export const useProcessStore = defineStore("process", {
  state: () => ({
    page1: {
      totalTime: 0,
      responseTime: 0,
      answer: {},
    },
    page2: {
      totalTime: 0,
      responseTime: 0,
      answer: {
        firstResult: [],
        lastResult: [],
        processResult: [],
      },
    },
    page3: {
      totalTime: 0,
      responseTime: 0,
      answer: {
        firstResult: {},
        lastResult: {},
        processResult: [],
      },
    },
    page4: {
      totalTime: 0,
      responseTime: 0,
      answer: {
        firstResult: [
          {
            plate: 0,
            npkA: 0,
            npkB: 0,
            noNPK: '0',
            processA: [],
            processB: []
          }
          , {
            plate: 1,
            npkA: 0,
            npkB: 0,
            noNPK: '0',
            processA: [],
            processB: []
          }, {
            plate: 2,
            npkA: 0,
            npkB: 0,
            noNPK: '0',
            processA: [],
            processB: []
          }
        ],
        lastResult: [{
          plate: 0,
          npkA: 0,
          npkB: 0,
          noNPK: '0',
          processA: [],
          processB: []
        }, {
          plate: 1,
          npkA: 0,
          npkB: 0,
          noNPK: '0',
          processA: [],
          processB: []
        }, {
          plate: 2,
          npkA: 0,
          npkB: 0,
          noNPK: '0',
          processA: [],
          processB: []
        }],
        processResult: [],
      },
    },
    page5: {
      totalTime: 0,
      responseTime: 0,
      answer: {},
    },
    page6: {
      totalTime: 0,
      responseTime: 0,
      answer: {
        firstResult: {
          choice:"",
          reason:"",
        },
        lastResult: {
          choice:"",
          reason:"",
        },
        processResult: [],
      },
    },
    page7: {
      totalTime: 0,
      responseTime: 0,
      answer: {
        firstResult: {
          height:[],
          answers:"",
        },
        lastResult: {
          height:[],
          answers:"",
        },
        processResult: [],
      },
    },
    page8: {
      totalTime: 0,
      responseTime: 0,
      answer: {
        firstResult: {
          flowers:[],
          answers:"",
        },
        lastResult: {
          flowers:[],
          answers:"",
        },
        processResult: [],
      },
    },
    page9: {
      totalTime: 0,
      responseTime: 0,
      answer: {
        firstResult: {
          choice:"",
          reason:"",
        },
        lastResult: {
          choice:"",
          reason:"",
        },
        processResult: [],
      },
    },

  }),
});
