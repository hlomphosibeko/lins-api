| Test Case             | Expected Result                                   | Test Result |
|-----------------------|---------------------------------------------------|-------------|
| Login as valid user   | Login to DRF successfully                         | ✅ PASS         |
| Login as invalid user | Login unsuccessfull                               | ✅ PASS         |
| Profile Page          | Post create form visible for logged in users      | ✅ PASS         |
| Post create           | Created post redirects to Post List, 201_CREATED  | ✅ PASS         |
| Like button           | Like own post forbidden                           | ✅ PASS         |
| Like button count     | Like button count increases when clicked          | ✅ PASS         |
| Like List             | All liked posts redirected to one list            | ✅ PASS         |
| Follow button         | When clicked, follow count increases              | ✅ PASS         |
| Comment               | Comments post successfully, 201_CREATED           | ✅ PASS         |
| Quote                 | Submits successfully                              | ✅ PASS         |
| Quote fields          | Values overlap, don't follow structure of project | ❌ FAIL         |