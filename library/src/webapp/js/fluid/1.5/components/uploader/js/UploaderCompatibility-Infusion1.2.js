var fluid_1_5=fluid_1_5||{};!function(fluid){"use strict";fluid.registerNamespace("fluid.compat.fluid_1_2.uploader"),fluid.enhance.check({"fluid.uploader.fluid_1_2":!0}),fluid.compat.fluid_1_2.uploader.optionsRules={components:{transform:[{type:"fluid.transforms.value",inputPath:"components",outputPath:"",merge:!0},{type:"fluid.transforms.value",outputPath:"",merge:!0,value:{strategy:{options:{styles:"decorators.0.options.styles"}},fileQueueView:"fileQueueView",totalProgressBar:"totalProgressBar"}}]},queueSettings:{transform:{type:"fluid.transforms.firstValue",values:["queueSettings","uploadManager.options"]}},invokers:"invokers",demo:"demo",selectors:"selectors",focusWithEvent:"focusWithEvent",styles:"styles",listeners:"listeners",strings:"strings",mergePolicy:"mergePolicy"},fluid.demands("fluid.uploader","fluid.uploader.fluid_1_2",{options:fluid.transformOne(fluid.compat.fluid_1_2.uploader.optionsRules)})}(fluid_1_5);