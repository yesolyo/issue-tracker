package issuetracker.issuetracker.domain.issue.dto.req;

import issuetracker.issuetracker.domain.label.dto.LabelDTO;
import issuetracker.issuetracker.domain.user.dto.AuthorDTO;
import lombok.Getter;
import lombok.Setter;
import nonapi.io.github.classgraph.json.Id;
import org.springframework.data.relational.core.mapping.MappedCollection;

import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
public class IssueDTO {
    @Id
    private Long issueId;
    private String title;
    private LocalDateTime createTime;
    private LocalDateTime updateTime;
    private Boolean isOPen;
    private String milestone;

    @MappedCollection(idColumn = "issue_id")
    private Set<AuthorDTO> authorList;

    @MappedCollection(idColumn = "issue_id")
    private Set<LabelDTO> labelList;

}
