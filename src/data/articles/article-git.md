## 分支命名前缀及含义

| 前缀        | 全称          | 用途                         | 示例                                            |
| ----------- | ------------- | ---------------------------- | ----------------------------------------------- |
| `feat/`     | feature       | 新功能开发                   | `feat/user-auth`, `feat/payment-gateway`        |
| `fix/`      | fix           | Bug 修复                     | `fix/login-error`, `fix/null-pointer`           |
| `release/`  | release       | 版本发布准备                 | `release/v2.1.0`, `release/2024-q1`             |
| `hotfix/`   | hotfix        | 紧急线上修复                 | `hotfix/prod-crash`, `hotfix/security-patch`    |
| `refactor/` | refactor      | 代码重构（不改功能）         | `refactor/api-client`, `refactor/db-layer`      |
| `style/`    | style         | 代码格式调整（空格、分号等） | `style/lint-fix`, `style/format-code`           |
| `docs/`     | documentation | 文档更新                     | `docs/readme-update`, `docs/api-docs`           |
| `test/`     | test          | 测试相关                     | `test/unit-tests`, `test/e2e-coverage`          |
| `chore/`    | chore         | 构建/工具/依赖更新           | `chore/upgrade-deps`, `chore/ci-config`         |
| `perf/`     | performance   | 性能优化                     | `perf/query-optimization`, `perf/image-loading` |
| `ci/`       | ci/cd         | CI/CD 配置                   | `ci/github-actions`, `ci/deployment-pipeline`   |
| `build/`    | build         | 构建系统/编译相关            | `build/webpack-config`, `build/dockerfile`      |

---

## 实际工作流示例

### 开发新功能（Jira 集成）
```bash
# 1. 同步主干
git checkout main && git pull

# 2. 创建分支（含任务 ID）
git checkout -b feat/PROJ-456-add-search-bar

# 3. 开发并提交（提交信息也用相同规范）
git commit -m "feat(search): add keyword search bar"
git commit -m "test(search): add unit tests for search"

# 4. 推送并创建 PR
git push -u origin feat/PROJ-456-add-search-bar
# → GitHub/GitLab 会自动识别类型并打标签
```

### 紧急线上修复
```bash
git checkout main && git pull
git checkout -b fix/PROJ-789-payment-failure

# 修复后提交
git commit -m "fix(payment): handle null response from gateway"

# PR 到 main，快速审批合并
git push origin fix/PROJ-789-payment-failure
```

### 准备发布
```bash
# 从 main 创建发布分支
git checkout main && git pull
git checkout -b release/v2.1.0

# 进行最后测试、更新版本号、CHANGELOG
git commit -m "chore(release): bump version to 2.1.0"
git commit -m "docs(changelog): update for v2.1.0"

# 合并到 main 并打 Tag
git checkout main
git merge --no-ff release/v2.1.0
git tag -a v2.1.0 -m "Release v2.1.0"
git push origin main --tags

# （可选）合并到 develop（如果使用 Git Flow）
```

---