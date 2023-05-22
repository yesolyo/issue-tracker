package issuetracker.issuetracker.domain.user.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class AuthorDTO {
    @Id
    private long id;
    @NotNull
    private String name;
    private String profileUrl;
}
