package gold.application.member.entity;


import gold.application.common.TimeTables;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Member extends TimeTables {

    private Long id;
    private String email;
    private String password;
    private String name;
    private String role;

}
