package gold.application.member.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Member {

    private Long id;
    private String email;
    private String password;
    private String name;
    private String role;

}
