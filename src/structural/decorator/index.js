const Macbook = require('./Macbook');
const MacbookDecorator = require('./MacbookDecorator');

const normalMacbook = new Macbook();

const enhancedMacbook1 = new Macbook();
MacbookDecorator.add8GBRam(enhancedMacbook1);
MacbookDecorator.add256GBSSD(enhancedMacbook1);

const enhancedMacbook2 = new Macbook();
MacbookDecorator.add16GBRam(enhancedMacbook2);
MacbookDecorator.add512GBSSD(enhancedMacbook2);
MacbookDecorator.add2GBGraphic(enhancedMacbook2);

normalMacbook.order();
enhancedMacbook1.order();
enhancedMacbook2.order();
