package gold.application.member.service;

import gold.application.member.entity.Member;
import gold.application.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

    private MemberRepository memberRepository;


    public Member createMember(Member member) {
        return memberRepository.save(member);
    }
}
