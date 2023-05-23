package issuetracker.issuetracker.domain.user;


import issuetracker.issuetracker.domain.issue.Issue;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.MappedCollection;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter
@ToString
public class Member {
    @Id
    private UUID id;

    @NotBlank
    private String loginId;

    @NotBlank
    private String memberName;

    @NotBlank
    private String password;

    @NotBlank
    private String email;

    private String profile_url;

    @Valid
    @MappedCollection(idColumn = "ISSUE_ID")
    @Builder.Default
    private List<Issue> issueList = new ArrayList<>();
}
