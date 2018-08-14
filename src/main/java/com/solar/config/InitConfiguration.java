/************************************************************************************************************
 * Class Name :  InitConfiguration.java
 * Description:  This class initialize the application's root configurations.
 * 
 * Author     :  Nilesh Patil
 * Date       :  Jun 26, 2016
 * **********************************************************************************************************
 */
package com.solar.config;

import java.io.IOException;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.resource.ResourceUrlEncodingFilter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "com.solar")
//@PropertySource("classpath:application.properties")
public class InitConfiguration extends WebMvcConfigurerAdapter
{
    private static final String EMAIL_HOST = "emailHost";
    private static final String EMAIL_SMTP_AUTH = "emailSMTPauth";
    private static final String MAIL_DEBUG = "mailDebug";
    private static final String TRANSPORT_PROTOCOL = "transportProtocol";
    
    @Bean
    public ResourceUrlEncodingFilter resourceUrlEncodingFilter() {
        return new ResourceUrlEncodingFilter();
    }
    
    @Autowired
    private Environment env;

    @Bean(name = "multipartResolver")
    public CommonsMultipartResolver getResolver() throws IOException
    {
        CommonsMultipartResolver resolver = new CommonsMultipartResolver();

        // Set the maximum allowed size (in bytes) for each individual file.
        resolver.setMaxUploadSizePerFile(5242880);// 5MB

        // You may also set other available properties.

        return resolver;
    }
    

    @Override
    public void configureViewResolvers(ViewResolverRegistry registry)
    {
        InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
        viewResolver.setViewClass(JstlView.class);
        viewResolver.setPrefix("/views/");
        viewResolver.setSuffix(".html");
        registry.viewResolver(viewResolver);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry)
    {
        registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
    }
    

    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
        configurer.enable();
    }
}
