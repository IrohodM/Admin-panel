import React, { createContext , useState } from "react";

export const CollapseContext = createContext();

export const CollapseProvider = ({children}) => {
    const [collapse , setCollapse] = useState(false);

    const toggleCollapse = () => {
      setCollapse((prev) => !prev)
    }

    return(
      <CollapseContext.Provider value={{collapse , toggleCollapse}}>
        {children}
      </CollapseContext.Provider>
    )
}


