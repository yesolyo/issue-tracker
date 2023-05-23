package issuetracker.issuetracker.domain.issue.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class AuthorDTO {
    @NotNull
    private Long id;
    @NotNull
    private String title;
    @NotNull
    private String profileUrl;
}
