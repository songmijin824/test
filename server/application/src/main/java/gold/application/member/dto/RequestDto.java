package gold.application.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class RequestDto {


    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {

        private String email;
        private String password;
        private String name;
        private String role;
    }


    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {

        private Long id;
        private String email;
        private String password;
        private String name;
        private String role;
    }
}


