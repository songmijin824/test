package gold.application.member.controller;

import gold.application.member.dto.RequestDto;
import gold.application.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/members")
public class MemberController {

    private MemberService memberService;



    @PostMapping
    public ResponseEntity postMember(@RequestBody RequestDto.Post post) {


    }
}
