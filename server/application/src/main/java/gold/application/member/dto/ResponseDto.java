package gold.application.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

public class ResponseDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Response {
        private Long id;
        private String email;
        private String password;
        private String name;
        private String role;
    }
}
