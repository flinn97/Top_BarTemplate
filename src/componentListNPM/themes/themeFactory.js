import defaultStyles from "./defaultStyles";
import LegatoStyles from "./legatoStyles";
import SpawnStyles from "./spawnStyles";


class ThemeFactory {
    operationsFactory;

    factory ={
       legato: LegatoStyles.getStylesByScreenSize(),
       spawn: SpawnStyles.getStylesByScreenSize(),
       default: defaultStyles.getStylesByScreenSize(),


    }
    registerComponents(register){
        this.factory[register.name]= register.component;
    }
    getThemeFactory(){
        return this.factory;
    }

    
}
export default ThemeFactory;