import "../../Navigation/index.css";
import "../index.css";

export const Grades = function () {
  return (
    <div className={"col"}>
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <div>
                <label htmlFor="grade-select">
                  <select id="grade-select">
                    <option selected>Gradebook</option>
                    <option>Option 2</option>
                  </select>
                </label>
                <button>Import</button>
                <label htmlFor="export-select">
                  <select id="export-select">
                    <option selected>export</option>
                    <option>export to pdf</option>
                  </select>
                </label>
                <button>configure</button>
              </div>
              <label>
                <h2>Student Names</h2>
                <input type="text" placeholder="Search Students" />
              </label>
              <label>
                <h2>Assignment Names</h2>
                <input type="text" placeholder="Search Assignments" />
              </label>
              <button>Apply Filters</button>
              <table border={1} width="100%">
                <thead>
                  <tr>
                    <th>
                      <div>Student Name</div>
                    </th>
                    <th>
                      <div>A1 SETUP</div>
                      <div>Out of 100</div>
                    </th>
                    <th>
                      <div>A2 HTML</div>
                      <div>Out of 100</div>
                    </th>
                    <th>
                      <div>A3 CSS</div>
                      <div>Out of 100</div>
                    </th>
                    <th>
                      <div>A4 BOOTSTRAP</div>
                      <div>Out of 100</div>
                    </th>
                    <th>
                      <div>A5 JAVASCRIPT</div>
                      <div>Out of 100</div>
                    </th>
                    <th>
                      <div>A6 REACT</div>
                      <div>Out of 100</div>
                    </th>
                    <th>
                      <div>A7 REDUX</div>
                      <div>Out of 100</div>
                    </th>
                    <th>
                      <div>A8 NODE</div>
                      <div>Out of 100</div>
                    </th>
                    <th>
                      <div>A9 MONGO</div>
                      <div>Out of 100</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alice Wonderland</td>
                    <td>
                      <div>99</div>
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <div>99</div>
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                  </tr>
                  <tr>
                    <td>Alice Wonderland</td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <div>99</div>
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <div>99</div>
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <div>99</div>
                    </td>
                    <td>
                      <div>99</div>
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                  </tr>
                  <tr>
                    <td>Alice Wonderland</td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <div>99</div>
                    </td>
                    <td>
                      <div>99</div>
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <div>99</div>
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                  </tr>
                  <tr>
                    <td>Alice Wonderland</td>
                    <td>
                      <div>99</div>
                    </td>
                    <td>
                      <div>99</div>
                    </td>
                    <td>
                      <div>99</div>
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <div>99</div>
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                    <td>
                      <input type="number" value="99" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
