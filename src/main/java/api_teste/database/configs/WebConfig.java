package api_teste.database.configs;

import org.springframework.context.annotation.Configuration; //Importa a anotação para definir a classe como uma configuração do Spring.
import org.springframework.web.servlet.config.annotation.CorsRegistry; //Importa a classe para configurar o CORS.
import org.springframework.web.servlet.config.annotation.EnableWebMvc; //Importa a anotação para habilitar o Spring MVC.
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer; //Importa a interface para configurar o Spring MVC.

@Configuration //Anotação que indica que essa classe é uma configuração do Spring, permitindo definir beans e configurações específicas para a aplicação.
@EnableWebMvc //Anotação que habilita o Spring MVC, permitindo a configuração de recursos e comportamentos do framework.

public class WebConfig implements WebMvcConfigurer { //Implementa a interface WebMvcConfigurer, permitindo personalizar a configuração do Spring MVC, como o mapeamento de URLs, interceptadores, conversores de mensagens e outras funcionalidades.

    @Override //Anotação que indica que o método abaixo sobrescreve um método da interface WebMvcConfigurer, permitindo personalizar o comportamento do Spring MVC.
    public void addCorsMappings(CorsRegistry registry) { //Anotação que permite configurar o CORS (Cross-Origin Resource Sharing) para a aplicação, definindo quais origens podem acessar os recursos da API.
        registry.addMapping("/**"); //Permite requisições de qualquer origem para qualquer endpoint da aplicação.
    }
    
}
