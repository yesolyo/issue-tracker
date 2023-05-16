package issuetracker.issuetracker.issue;

public class PostResponseDto {
    private String name;
    private Integer age;

    public PostResponseDto(String name, Integer age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public Integer getAge() {
        return age;
    }
}
