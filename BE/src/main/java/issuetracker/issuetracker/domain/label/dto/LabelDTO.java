package issuetracker.issuetracker.domain.label.dto;

import lombok.*;

@Getter
@Setter
public class LabelDTO {
    private long id;
    private String labelName;
    private String backgroundColor;
}
