package issuetracker.issuetracker.domain.user.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthorDTO {
    private long authorId;
    private String authorName;
    private String authorProfileUrl;
}
