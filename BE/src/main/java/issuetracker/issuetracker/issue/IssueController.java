package issuetracker.issuetracker.issue;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Api(tags = {"게시글 API 정보를 제공하는 Controller"})
@RequestMapping("/api")
@RestController
public class IssueController {

    @ApiOperation(value = "조건에 맞는 게시글 목록을 반환하는 메소드")
    @ApiImplicitParam(name = "tagIds", value = "검색할 태그 ID를 담은 리스트", dataType = "list")
    @GetMapping("/posts")
    public ResponseEntity<List<PostResponseDto>> getPosts(@RequestParam(required = false) List<Long> tagIds) {
        final List<PostResponseDto> responses = new ArrayList<>();
        responses.add(new PostResponseDto("age", 1));

        return ResponseEntity.ok()
                .body(responses);
    }
}
