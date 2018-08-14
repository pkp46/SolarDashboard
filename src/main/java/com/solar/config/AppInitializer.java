/************************************************************************************************************
 * Class Name :  AppInitializer.java
 * Description:  This class initialize the application's root configurations.
 * 
 * Author     :  Nilesh Patil
 * Date       :  Jun 26, 2016
 * **********************************************************************************************************
 */

package com.solar.config;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;


@Component
public class AppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer
{

    @Override
    protected Class<?>[] getRootConfigClasses()
    {
        return new Class[] { InitConfiguration.class };
    }

    @Override
    protected Class<?>[] getServletConfigClasses()
    {
        return new Class[] {};
    }

    @Override
    protected String[] getServletMappings()
    {
        return new String[] { "/" };
    }
    

}
